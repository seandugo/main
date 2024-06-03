from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

driver = webdriver.Firefox()

try:
    driver.get("C:/Users/a3zir/OneDrive/Desktop/PROG34/DUMAOP-HOA5/dumaop.htm")
    driver.maximize_window()

    def simulate_button_click(button_id, image_url):
        button = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, button_id)))
        driver.execute_script("""
            var button = arguments[0];
            var isPictureDisplayed = button.getAttribute("data-isPictureDisplayed") === "true";
            if (!isPictureDisplayed) {
                button.style.backgroundImage = 'url(""" + image_url + """)';
                button.style.transform = 'scale(3.00)';
                button.style.position = 'absolute';
                button.style.left = '40%';
                button.style.top = '30%';
                button.style.width = '50px';
                button.style.height = '100px';
                button.style.zIndex = '3';
                button.style.color = 'transparent';
                button.setAttribute("data-isPictureDisplayed", "true");
            } else {
                button.style.backgroundImage = 'none';
                button.style.transform = 'scale(1)';
                button.style.position = 'static';
                button.style.width = 'auto';
                button.style.height = 'auto';
                button.style.zIndex = '0';
                button.setAttribute("data-isPictureDisplayed", "false");
            }
        """, button)


    simulate_button_click("Hobby", "./dumaop-images/hobby.jpg")
    time.sleep(3)  
    simulate_button_click("Ball", "./dumaop-images/ball.png")
    time.sleep(3)
    simulate_button_click("Color", "./dumaop-images/color.jpg")
    time.sleep(3)
    simulate_button_click("Season", "./dumaop-images/season.webp")
    time.sleep(3)
    simulate_button_click("Character", "./dumaop-images/character.webp")
    time.sleep(3)
    simulate_button_click("Dessert", "./dumaop-images/dessert.jpg")
    time.sleep(3)
    simulate_button_click("Food", "./dumaop-images/food.jpg")
    time.sleep(3)
    simulate_button_click("Place", "./dumaop-images/place.jpg")
    time.sleep(3)
    simulate_button_click("Day", "./dumaop-images/Day.webp")
    time.sleep(3)
    

finally:
    driver.quit()