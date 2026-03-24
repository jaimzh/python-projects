# Unit Converter

A full-stack unit converter with a Python backend and a React frontend. you pick a category, choose your units, type a value, and it converts it.

Project idea from [roadmap.sh](https://roadmap.sh/projects/unit-converter)

## Project Structure

```
unit-converter/
├── backend/
│   ├── main.py          # FastAPI server, handles the routes and CORS
│   ├── converter.py     # All the actual conversion logic lives here
│   ├── models.py        # Request/response models (Pydantic)
│   └── venv/            # Python virtual environment
├── frontend/
│   └── unit-converter-fe/
│       ├── src/
│       │   ├── App.tsx              # Main app component, ties everything together
│       │   ├── api/converter.ts     # Axios client, talks to the backend
│       │   └── components/          # UI pieces (mode buttons, unit sections, result display)
│       ├── package.json
│       └── vite.config.ts
└── README.md
```

## Installation

make sure you have Python 3.10+, Node.js 18+, and pnpm installed.

```bash
git clone <your-repo-url>
cd unit-converter
```

### backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install fastapi uvicorn
uvicorn main:app --reload
```

that'll start the API on `http://localhost:8000`.

### frontend

```bash
cd frontend/unit-converter-fe
pnpm install
pnpm dev
```

that'll start the app on `http://localhost:5173`.

## How to use it

pretty straightforward. open the app in your browser and:

### 1. pick a category

click one of the three buttons at the top: Length, Weight, or Temperature.

### 2. choose your units

select what you're converting from and to using the dropdowns.

- **length** -- millimeter, centimeter, meter, kilometer, inch, foot, yard, mile
- **weight** -- milligram, gram, kilogram, ounce, pound
- **temperature** -- celsius, fahrenheit, kelvin

### 3. type a value and hit convert

type in your number and click the convert button. result shows up right below.

## API Endpoints

if you want to hit the backend directly:

| Method | Path                   | Description               |
|--------|------------------------|---------------------------|
| GET    | `/`                    | Health check              |
| POST   | `/convert/length`      | Convert length units      |
| POST   | `/convert/weight`      | Convert weight units      |
| POST   | `/convert/temperature` | Convert temperature units |

all POST endpoints take the same body:

```json
{
  "value": 100,
  "from_unit": "meter",
  "to_unit": "foot"
}
```

and give back:

```json
{
  "result": 328.084
}
```

## Built With

- FastAPI
- React 19 + TypeScript
- Vite
- Tailwind CSS
- Axios

---

first time using FastAPI and TypeScript to build a full-stack application so that's something...crazy how something so simple has so much steps but they're all repetitive if you think about it.....for now lol