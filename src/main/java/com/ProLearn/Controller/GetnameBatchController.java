package com.ProLearn.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.HashMap;
import java.util.Map;

import com.ProLearn.Service.GetnameBatchService;

@RestController
@RequestMapping("/api/name")
@CrossOrigin(origins = "http://localhost:3000")
public class GetnameBatchController {
    
    @Autowired
    GetnameBatchService getnamebatchService;
    
    // Method to get name by u_name
    @GetMapping("/{value}")
    public Map<String, String> getNameByUName(@PathVariable String value) {
        Map<String, String> response = new HashMap<>();
        String name = getnamebatchService.findnameByu_name(value);
        response.put("name", name);
        return response;
    }
}
