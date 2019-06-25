#include <Servo.h>

Servo Pepe;

void setup() {
  // put your setup code here, to run once:
  Pepe.attach(0);
}

void loop() {
  // put your main code here, to run repeatedly:
  Pepe.write(0);
  delay(1000);
  Pepe.write(90);
  delay(1000);
  Pepe.write(180);
  delay(1000);
}
