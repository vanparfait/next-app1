import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <ul className="ml-3">
      <li>
        {" "}
        <Link href="/article/1">article 1</Link>
      </li>
      <li>
        {" "}
        <Link href="/article/2">article 2</Link>
      </li>
      <li>
        {" "}
        <Link href="/article/3">article 3</Link>
      </li>
    </ul>
  );
};

export default page;
