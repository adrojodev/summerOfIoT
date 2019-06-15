//
// Copyright 2015 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

// FirebaseDemo_ESP8266 is a sample that demo the different functions
// of the FirebaseArduino API.

#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>
#include <Servo.h>

Servo myServo;

// Set these to run example.
#define FIREBASE_HOST "url.firebaseio.com"
#define FIREBASE_AUTH "auth"
#define WIFI_SSID "Your wifi name"
#define WIFI_PASSWORD "The password"

void setup() {

  pinMode(16, OUTPUT);
  pinMode(4, INPUT);
  pinMode(0, INPUT);
  myServo.attach(5);
  
  Serial.begin(9600);

  // connect to wifi.
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("connecting");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println();
  Serial.print("connected: ");
  Serial.println(WiFi.localIP());
  
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
}

int n = 0;

void loop() {

  if (Firebase.getString("LED") == "ON") {
      digitalWrite(16, HIGH);
  } else {
    digitalWrite(16, LOW);
  }
  
  myServo.write(Firebase.getString("anguloServo").toInt());

  if (digitalRead(4)) {
    Firebase.setString("valorAgua", "Hay agua");
  } else {
    Firebase.setString("valorAgua", "No hay agua");
  }

  if (digitalRead(0)) {
    Firebase.setString("valorBoton", "Unpushed");
  } else {
    Firebase.setString("valorBoton", "Pushed");
  }

}
