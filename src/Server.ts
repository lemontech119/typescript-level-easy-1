import app from "./App";
import { PORT } from "./constants/Constants";

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));