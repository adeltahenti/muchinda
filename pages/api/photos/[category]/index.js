import { photos, categories } from '../../../../data';

export default function handler({ query: { category } }, res) {
  const catFiltered = categories.filter((cat) => cat.name === category);

  if (catFiltered.length > 0) {
    const filtered = photos.filter((photo) => photo.category === category);

    if (filtered.length > 0) {
      res.status(200).json(filtered);
    } else {
      res.status(200).json([]);
    }
  } else {
    res.status(404).json({ message: `Category: ${category} is not found` });
  }
}
