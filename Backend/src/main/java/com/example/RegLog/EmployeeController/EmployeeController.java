package com.example.RegLog.EmployeeController;


import com.example.RegLog.Dto.EmployeeDTO;
import com.example.RegLog.Dto.LoginDTO;
import com.example.RegLog.Service.EmployeeService;
import com.example.RegLog.payload.response.LoginMesage;
import com.example.RegLog.response.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/v1/employee")
public class EmployeeController {


    @Autowired
    private EmployeeService employeeService;


    @PostMapping(path = "/save")
    public String saveEmployee(@RequestBody EmployeeDTO employeeDTO)
    {
        String id = employeeService.addEmployee(employeeDTO);
        return id;
    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> loginEmployee(@RequestBody LoginDTO loginDTO)
    {
        LoginMesage loginResponse = employeeService.loginEmployee(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }
}
