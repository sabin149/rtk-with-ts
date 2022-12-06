export type StateType={
  id: number;
  title: string;
  completed: boolean;
}

export type ActionType =
  | {
      type: "ADD_TODO";
      payload: { title: string };
    }
  | {
      type: "TOGGLE_TODO";
      payload: {
        id: number;
      };
    }
  | {
      type: "DELETE_TODO";
      payload: {
        id: number;
      };
    }
  | {
      type: "UPDATE_TODO";
      payload: {
        id: number;
        title: string;
      };
    };
