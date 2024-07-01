# One Million Checkboxes Game

## Overview

The One Million Checkboxes game is a simple web application where users interact with a grid of checkboxes. The objective is to toggle the checkboxes and keep track of the total number of checkboxes checked. The game dynamically updates the count based on user actions.

## Features

- Interactive grid of checkboxes.
- Real-time updating of the total count of checked checkboxes.
- Scalable backend to handle a large number of checkboxes (up to one million).
- Pagination for fetching checkboxes in manageable chunks.

## Getting Started

### Prerequisites

- Node.js (version >= 18)
- pnpm package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/gracebir/checkbox-game-backend
   cd one-million-checkboxes
2. Install dependencies using pnpm:
    ```bash
    pnpm install
### Configuration
1. Configure database connection:
   
- Create a `.env` file based on `.env.example` and set your database credentials.
  
### Running the Application
Start the backend server:
    ```bash
    pnpm run dev
