## Getting Started
Follow these steps to get the server running locally from scratch.

### Prerequisites

* Node.js (v18+ recommended)
* npm or yarn

### Project Structure

```
.
├── server.js
├── routes/
├── controllers/
├── services/
├── repositories/
├── common/
├── utils/
└── ...
```

### Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/Zain-mehmood001/ride-backend.git
cd ride-booking-api
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Seed initial data (optional)**

Location seeding is included by default with `seedLocations()` in `server.js`.

4. **Start the server**

```bash
node server.js
```

You should see:

```
Server running on http://localhost:3000
```
