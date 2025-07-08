Feature: Realizar pagos

  Scenario: Usuario realiza un pago exitoso
    Given el usuario inicia sesión en Parabank
    When navega a la sección de pagos
    And realiza un pago a la cuenta "12345678" por el monto "200"
    Then debería ver un mensaje de confirmación de pago
