# -*- coding: utf-8 -*-
"""
Created on Thu May  7 07:47:07 2020

@author: "Tim Schneegans"
"""

import os
import time

seconds = float()
minutes = int()
hours   = int()

run = input("Enter R to run the program:")   # Start the program
while run.lower()=="r": 
    if seconds > 59: 
        seconds = 0 
        minutes = minutes+1
    if minutes > 59:
        minutes = 0
        hours = hours+1
    os.system('cls')    # Clear the command prompt
    seconds = (seconds+ 1)    # Count seconds
    print(hours,":",minutes,":",seconds)    
    time.sleep(1)    # Go back to line 17 and repeat while loop