package com.example.RegLog.EmployeeController;

import com.stripe.Stripe;
import com.stripe.model.PaymentIntent;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class PaymentController {

	@Value("${stripe.secretKey}")
    private String secretKey;

    @PostMapping("/api/payment")
    public ResponseEntity<Map<String, Object>> createPaymentIntent(@RequestBody Map<String, Object> payload) {
        Stripe.apiKey = secretKey;

        try {
            // Create a PaymentIntent
            Map<String, Object> params = new HashMap<>();
            params.put("amount", payload.get("totalAmount"));
            params.put("currency", "usd");
            params.put("description", "Payment for order");
            PaymentIntent paymentIntent = PaymentIntent.create(params);

            // Return client secret to frontend
            Map<String, Object> response = new HashMap<>();
            response.put("clientSecret", paymentIntent.getClientSecret());
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            // Handle exception
            return ResponseEntity.status(500).body(null);
        }
    }
}
