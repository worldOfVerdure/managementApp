/*
 *   Project's management application
 *   ==================================
 *   1) Build SideBar and Content components
 *      # Sidebar
 *      - Show a list of projects
 *      - Have an "Add Project" button that navigates
 *        to form to add to the list of project
 *      - List of projects should be navigatable to the 
 *        project detail view
 *      # Content
 *      - main content window where you will display projects
 *      - should show fallback when there is no project to display
 *      - fallback should have a button to navigate to the
 *        new project form
 *   2) Project Detail components
 *      # New Project Form
 *      - a form to add a new project
 *      - should have a "title", "description", & "due date" fields
 *      - ultimately update your state in the App component with
 *        the new project information
 *      # Project Detail component
 *      - show the title and description of the project along
 *        with the due date of the project
 *      - show a delete button and handle the deletion
 *      # Tasks component
 *      - nested in the detail view
 *      - Show a list of tasks associated with the project
 *      - Facilitate the adding/removal of tasks through a
 *        form and button respectively
 *      - Again manage your tasks state associated with each
 *        project, likely in the App component as well
 */


BUGFIX:
-Side bar clicked, then screen is resized, causing the sidebar btn to display as none (intended)while the side bar persists, with no way to remove it.
