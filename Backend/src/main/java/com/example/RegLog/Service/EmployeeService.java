package com.example.RegLog.Service;

import com.example.RegLog.Dto.EmployeeDTO;
import com.example.RegLog.Dto.LoginDTO;
import com.example.RegLog.payload.response.LoginMesage;

public interface EmployeeService {
    String addEmployee(EmployeeDTO employeeDTO);
    LoginMesage loginEmployee(LoginDTO loginDTO);
}
