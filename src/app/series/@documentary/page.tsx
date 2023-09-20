import { getDocumentarySerials } from "@/shared/api";
import { DocumentarySection } from "@/widgets/documentary";

const Documentary = async () => {
  const movies = await getDocumentarySerials();
  return <DocumentarySection movies={movies} type="сериалы" />;
};

export default Documentary;
