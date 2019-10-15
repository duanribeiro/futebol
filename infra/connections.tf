provider "google" {
  credentials = "${file("client_secret.json")}"
  project     = "My Project 7326"
  region      = "us-west1"
}