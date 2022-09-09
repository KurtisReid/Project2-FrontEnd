package dev.reid.gradebook;

import dev.reid.entities.Employee;
import dev.reid.repos.EmployeeRepo;
import dev.reid.services.JwtService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jms.core.JmsTemplate;

import java.util.List;

@SpringBootTest
class GradebookApplicationTests {

	@Autowired
	EmployeeRepo employeeRepo;

	@Autowired
	JwtService jwtService;

	@Autowired
	JmsTemplate jmsTemplate;




	@Test
	void contextLoads() {
		String msg = "hello from gradebook";
		jmsTemplate.convertAndSend("message-queue", msg);

	}

	@Test
	void create_employee()
	{
		Employee sam = new Employee(null, "kurttest", "password", "admin");
		employeeRepo.save(sam);
		System.out.println(sam);
		Assertions.assertNotNull(sam.getId());
	}

	@Test
	void get_employees()
	{
		List<Employee> employees = employeeRepo.findAll();
		System.out.println(employees);
	}

	@Test
	void find_by_username()
	{
		Employee employee = employeeRepo.findByUsername("kurtadmin");
		System.out.println("hello " + employee);
		Assertions.assertEquals("admin", employee.getRole());
	}

	@Test
	void create_jwt()
	{
		String jwt =  jwtService.createJwtWithUsernameAndRole("terry", "wizard");
		System.out.println(jwt);

	}

}
