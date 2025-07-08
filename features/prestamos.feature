Feature: Solicitar préstamos

  Scenario: Usuario solicita un préstamo exitosamente
    Given el usuario accede al sistema Parabank
    When navega a la sección de préstamos
    And solicita un préstamo de "1000" con una cuota inicial de "100"
    Then debería ver un mensaje de confirmación de préstamo
