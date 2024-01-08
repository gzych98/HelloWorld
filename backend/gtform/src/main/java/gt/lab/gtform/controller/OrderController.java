package gt.lab.gtform.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import gt.lab.gtform.service.OrderService;
import gt.lab.gtform.model.Order;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/pages/api/sendEmail")
public class OrderController {
    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping
    public ResponseEntity<?> createOrder(@RequestBody Order order) {
        return new ResponseEntity<>(this.orderService.addOrder(order), HttpStatus.CREATED);
    }
}