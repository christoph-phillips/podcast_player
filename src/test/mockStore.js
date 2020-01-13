import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import audio from "../middleware/audio";

const mockStore = configureMockStore([thunk]);
const mockStoreWithAudio = configureMockStore([thunk, audio]);
export { mockStore, mockStoreWithAudio };
