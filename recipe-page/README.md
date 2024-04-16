Recipe Page built using React 

# YumJunction Web Application

YumJunction is a React-based web application that serves as a hub for food enthusiasts and home cooks. It provides a wide range of recipes from various cuisines, allowing users to explore and discover new dishes.

The application is designed with a user-friendly interface, making it easy for users to navigate through different recipes.

Whether you're a seasoned chef looking for inspiration or a beginner starting your culinary journey, YumJunction is the perfect place to find your next favorite dish.


# Running Web Application with Backend and Frontend

1. Navigate to the backend server: `cd react-node-app/server`
2. Start the backend server: `npm start`

The back endserver should now be running at http://localhost:3001


## Front End Startup
1. Navigate back to the root  directory (recipe-page) and run: `npm start`
2. Start the development server: `npm start`

After running this command, you should be able to see the YumJunction application running in your web browser at http://localhost:3000.

NOTE: The instructions listed above are crucial to running YumJunction web application

# Current Features 
1. Navbar with smooth access to other parts of our web application which include: team-page and grocery list feature
2. Grocery List: Allows users to enter in any ingredient they've found out of all the recipes on the page
3. Add Recipe: Allows ussers to enter in any recipe they want with restrictions on how input format.

Example of how to input recipe: 
{
    "title": "Chocolate Cake",
    "description": "A delicious and moist chocolate cake.",
    "ingredients": ["200g flour", "200g sugar", "100g cocoa powder", "3 eggs", "200ml milk"],
    "directions": "1. Preheat the oven to 180C. 2. Mix all the ingredients together. 3. Pour the batter into a cake tin. 4. Bake for 30 minutes."
}
 4. Cooking Mode which is available on every recipe page (that are not user added) which gives users an enhanced view on cooking each recipe

 5. **Microsoft Azure Alert Rules:** We have the following rules setup on Azure: 

    - Cost alert: If the allocated cost is exceeded then Azure will send out an alert
    - Database updated: If our SQL database is updated then Azure will also send out an alert
    - Activity Monitor Alert: Any activity is logged and will be sent out as an alert. For example, if the application is deployed that will also be sent out as an alert. 

# Accessing Recipe Pages:

To access the recipe page for a specific dish, simply click on the title of the dish from the main page. This will take you to the detailed recipe page where you can find step-by-step instructions, ingredient quantities, cooking times, and additional tips and tricks.

# Exploring the Recipe Description:

Once on the recipe page, you can delve deeper into the description of the recipe by clicking on the accordion provided. This will expand the description section, providing more information about the origins of the dish, its cultural significance, any variations or adaptations, and personal anecdotes from the chefs featured on the show.

# Benefits of Using Our Recipe Pages:

1. Comprehensive Instructions: Our recipe pages provide clear and concise instructions, making it easy for both novice and experienced cooks to follow along.
2. Ingredient Lists: We list all the ingredients you'll need to make each dish, ensuring you have everything on hand before you start cooking.
3. Inspiration from TV Shows: Get inspired by the culinary creations featured on your favorite TV shows, and bring the flavors of the screen into your home kitchen.
4. Explore New Flavors: Discover new ingredients, techniques, and flavor combinations as you recreate dishes from different cuisines and cultures.

# Start Cooking Today:

Explore our collection of recipe pages inspired by TV shows and start cooking up a storm in your kitchen. Whether you're hosting a dinner party, cooking for your family, or simply indulging in some solo culinary adventures, our recipes are sure to impress and delight. Happy cooking!

# Meet Our Team

Welcome to our team page, where you can get to know the talented individuals behind our projects and endeavors. We draw inspiration from the collaborative spirit and dedication to excellence exemplified by Thant Zin Phyo's innovative team page design.

Our team members are:

Yunus Kocaman: With a keen eye for detail and a passion for problem-solving, Yunus brings a wealth of expertise to our team. His innovative approach and dedication to quality drive our projects forward.

Danish Abbasi: A creative thinker and a strategic planner, Danish brings a unique perspective to our team. His ability to see the bigger picture and find elegant solutions to complex challenges is invaluable.

Joseph Sosa: As a versatile team player with a knack for communication, Joseph plays a pivotal role in ensuring smooth collaboration and effective coordination among team members. His positive attitude and strong work ethic inspire us all.

Fitz Wangaru: With a deep understanding of technology and a commitment to continuous learning, Fitz brings fresh ideas and a dynamic energy to our team. His enthusiasm for innovation keeps us motivated and inspired.

Together, we form a cohesive unit dedicated to achieving our goals and making a positive impact in everything we do. We believe in the power of collaboration, mutual respect, and shared success, and we are excited to embark on this journey together.

Thank you for visiting our team page, and we look forward to connecting with you further as we continue to grow and thrive as a team.

# Installation

Follow these steps to get YumJunction running on your local machine:

1. Clone the repository: First, you'll need to clone the YumJunction repository to your local machine. You can do this with the following command:

``bash
git clone <your-repo-url>


2. Navigate to the project directory: Once you've cloned the repository, navigate to the project directory: cd recipe-page



3. Install dependencies: YumJunction has a number of dependencies that you'll need to install. You can install all of them at once with the following command: npm install


4. Start the development server: Finally, you can start the development server: npm start 

After running this command, you should be able to see the YumJunction application running in your web browser at http://localhost:3000.


Note: Remember to replace <your-repo-url> with the actual URL of your repository.
