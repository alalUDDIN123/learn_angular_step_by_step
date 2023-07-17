# Dependency Injection

 
  - **Definition**:
    Dependency Injection (DI) is a software design pattern where an object receives its dependencies from an external framework rather than creating them itself. 

  - **Use Case**:
    Dependency Injection is used when an object depends on another object to perform its tasks. 
    
  - **Benefits**:
    DI makes the code more maintainable, reusable, and testable. By delegating the creation of dependencies to an external framework, it allows components to be more decoupled and modular. 

  - **Extra information**:
    In Angular, dependencies are defined by providers. When a component requires a dependency, Angular uses the injector to find the appropriate provider for that service. This provider then returns a new or shared instance of the dependency.


    ---
    `git push origin dependency_injection`
 