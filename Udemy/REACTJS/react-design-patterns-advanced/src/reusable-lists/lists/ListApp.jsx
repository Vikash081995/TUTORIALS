import React from "react";
import { RegularList } from "./RegularLists";
import { authors } from "../data/authors";
import { books } from "../data/books";
import { SmallAuthorListItem } from "../authors/SmallListItems";
import { LargeAuthorListItem } from "../authors/LargeListItems";
import { SmallBookListItem } from "./../books/SmallListItems";
import { LargeBookListItem } from "../books/LargeListItems";

const ListApp = () => {
  return (
    <>
      <RegularList
        item={authors}
        sourceName={"author"}
        ItemComponent={SmallAuthorListItem}
      />
      <RegularList
        item={authors}
        sourceName={"author"}
        ItemComponent={LargeAuthorListItem}
      />
      <RegularList
        items={books}
        sourceName={"book"}
        ItemComponent={SmallBookListItem}
      />
      <RegularList
        items={books}
        sourceName={"book"}
        ItemComponent={LargeBookListItem}
      />
    </>
  );
};

export default ListApp;
