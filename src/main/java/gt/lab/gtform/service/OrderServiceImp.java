package gt.lab.gtform.service;

import org.springframework.stereotype.Service;

import gt.lab.gtform.model.Order;
import gt.lab.gtform.repository.OrderRepo;

@Service
public class OrderServiceImp implements OrderService {

    private OrderRepo orderRepo;

    public OrderServiceImp(OrderRepo orderRepo) {
        this.orderRepo = orderRepo;
    }

    @Override
    public Order addOrder(Order order) {
        return orderRepo.save(order);
    }
}
