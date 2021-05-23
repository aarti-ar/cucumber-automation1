package demo.automationtesting.com;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = ".",
        glue = "Register_StefDef",
        plugin = {"pretty","html:target/cucumber-report"},
        dryRun = false
        //tags = "@Sanity"
)
public class TestRunner {
}
