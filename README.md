# Sprint 1: TypeScript CSV

### Task B: Proposing Enhancement

- #### Step 1: Brainstorm on your own.

- #### Step 2: Use an LLM to help expand your perspective.

- #### Step 3: use an LLM to help expand your perspective.

    Include a list of the top 4 enhancements or edge cases you think are most valuable to explore in the next week’s sprint. Label them clearly by category (extensibility vs. functionality), and include whether they came from you, the LLM, or both. Describe these using the User Story format—see below for a definition. 

    Functionality
    1. User Story:
    As a user, I am able to input data that includes commas as long as they
    are wrapped in quotes as per the convention. That way, I can input many
    different types of data.
    Acceptance Criteria:
    - The user can input data, inclusive of commas, wrapped in quotes (e.g. 
    "3,000" or "Hello, world!")
    - The parser correctly interprets this as belonging to the same column
    rather than starting a new one

    Extensability
    2. User Story:
    
    As a user, I receive a warning requesting confirmation that I have
    intentionally input a blank file or one with blank spots 
    Acceptance Criteria:
    - If the user inputs an empty CSV file, they receive notification of the
    the fact that the CSV is empty or has blank spaces (e.g., 1,2,,4)
    - If they wish, they may proceed anyway with the input CSV file

    Extensability
    3. User Story:
    As a user, I have the option of removing the header from the rest of the
    file as I parse the CSV so that I can pass the data without any downstream
    complication
    Acceptance Criteria:
    - If the user inputs a file with a header, they should be asked whether 
    a header exists, and if so, whether they want it to be parsed
    - Accordingly, the header should be included or ignored in the final output

    Extensability
    4. User Story:
    As a user, I have the ability to add type checking to my CSV so that I 
    can validate that I am inputting the correct types of data
    Acceptance Criteria:
    - If a user inputs a file, they should be asked if the data is of some
    specific type like integers (if at all)
    - Then, the data should be checked for compliance with this scheme and any 
    compliance issues should be flagged.

    Include your notes from above: what were your initial ideas, what did the LLM suggest, and how did the results differ by prompt? What resonated with you, and what didn’t? (3-5 sentences.) 

    My initial ideas primarily revolved around edge cases and functionality. My
    first idea was to fix the issues regarding the program's interpretation of 
    commas. I also wanted to work on its ability to handle line breaks and 
    distinguish headers. The LLM came up with all of these ideas plus data
    validation idea (both type and presence), which I realized that I had
    initially glossed over. These latter ideas were raised when I prompted it to
    think about extensability as well as functionality.

### Design Choices

### 1340 Supplement

- #### 1. Correctness

- #### 2. Random, On-Demand Generation

- #### 3. Overall experience, Bugs encountered and resolved
#### Errors/Bugs:
#### Tests:
#### How To…

#### Team members and contributions (include cs logins):

#### Collaborators (cslogins of anyone you worked with on this project and/or generative AI):
#### Total estimated time it took to complete project:
#### Link to GitHub Repo:  
