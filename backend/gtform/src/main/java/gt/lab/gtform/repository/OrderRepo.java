package gt.lab.gtform.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import gt.lab.gtform.model.Order;

public interface OrderRepo extends JpaRepository<Order, Long> {
    // metody dostępu do danych

}
