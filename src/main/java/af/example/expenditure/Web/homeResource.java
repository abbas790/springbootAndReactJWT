package af.example.expenditure.Web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import af.example.expenditure.Service.TestService;


@RestController
@RequestMapping("/api/")
public class homeResource {
    @Autowired
    TestService testService;
  @GetMapping("home")
    public String home(){
        return "good";
    }

    @PostMapping("save")
      @PreAuthorize("hasAuthority('USER')")
    public void add(String data){
        testService.save(data);
    }
}
