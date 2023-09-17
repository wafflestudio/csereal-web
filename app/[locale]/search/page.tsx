interface SearchPageProps {
  searchParams: {
    query: string;
  };
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  console.log(searchParams);
  return <>asd</>;
}
