import { act } from "react-test-renderer";
import { screen } from "@testing-library/react";
import configureMockStore from "redux-mock-store";

import { testRender } from "../../helpers/test-utils";

import { DogList } from "..";

const mockStore = configureMockStore();
const store = mockStore({
  dogs: {
    ids: ["60d99da40ac0e81af7f2c4ae"],
    entities: {
      "60d99da40ac0e81af7f2c4ae": {
        _id: "60d99da40ac0e81af7f2c4ae",
        name: "Yuli",
        breed: "Yorkshire",
        age: 8,
        __v: 0,
      },
    },
    status: "succeeded",
    error: null,
  },
});

describe("<App />", () => {
  test("renders text `Yuli`", async () => {
    await act(async () => {
      testRender(<DogList />, { store });

      expect(await screen.findByText(/Yuli/i)).toBeInTheDocument();
    });
  });
});
