import { getTestimonyByName } from "@/lib/testimony";
import TestimonyDetailClient from "./client";

type tParams = Promise<{ id: string }>;

export default async function TestimonyDetail(props: { params: tParams }) {
  const { id } = await props.params;
  const testimony = getTestimonyByName(id);

  return (
    <TestimonyDetailClient
      testimony={testimony.testimony}
      name={testimony.name}
      from={testimony.from}
      accepted_at={testimony.accepted_at}
    />
  );
}
