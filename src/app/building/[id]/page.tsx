interface BuildingPageProps {
  params: {
    id: string;
  };
}

export default function Building({ params }: BuildingPageProps) {
  const { id } = params;

  return <h2>Page {id}</h2>;
}
