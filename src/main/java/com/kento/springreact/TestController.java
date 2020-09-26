package com.kento.springreact;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    @GetMapping("/api/greeting")
    public String greeting(){
        return "Hello taoufiq from spring 😃";
    }
}
