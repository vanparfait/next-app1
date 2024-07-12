import React from "react";

type Props = {
  params: {
    id: number;
  };
};

const page = ({ params }: Props) => {
  return <div>vous etes sur {params.id} articles</div>;
};

export default page;
