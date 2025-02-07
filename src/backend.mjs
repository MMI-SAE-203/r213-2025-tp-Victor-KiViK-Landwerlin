import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");

export async function allMaisons() {
  const records = await pb.collection("Maison").getFullList();
  return records;
}

export async function oneId(id) {
  const records = await pb.collection("Maison").getOne(id);
  return records;
}

export async function allMaisonsFavoris() {
  const records = await pb
    .collection("Maison")
    .getList(1, 50, { filter: "favoris=true" });
  return records;
}

export async function allMaisonsSorted() {
  const records = await pb.collection("Maison").getFullList({ sort: "prix" });
  return records;
}

export async function surfaceORprix(s, p) {
  const records = await pb
    .collection("Maison")
    .getList(1, 50, { filter: "surface>" + s + " || prix<" + p });
  return records;
}

export async function AgentById(id) {
  const records = await pb.collection("Agent").getOne(id);
  return records;
}

export async function getOffres() {
  try {
    let data = await pb.collection("Maison").getFullList({
      sort: "-created",
    });
    data = data.map((a) => {
      a.img = pb.files.getURL(a, a.image);
      return a;
    });
    return data;
  } catch (error) {
    console.log(
      "Une erreur est survenue en lisant la liste des maisons",
      error
    );
    return [];
  }
}

export async function getOffre(id) {
  try {
      let data = await pb.collection('maison').getOne(id);
      data.imageUrl = pb.files.getURL(data, data.image);
      return data;
  } catch (error) {
      console.log('Une erreur est survenue en lisant la maison', error);
      return null;
  }
}

export async function bySurface(lasurface) {
  try{
  let records = await pb.collection("Maison").getFullList({ filter : "surface>"+lasurface}) ;
  records = records.map((a) => {
    a.img = pb.files.getURL(a, a.image);
    return a;
  });
  return records ;
  } catch(error){
  console.log("Une erreur est survenue en lisant la liste des maisons",error);
  return [];
  }
}

export async function byprix(leprix) {
  try{
  let records = await pb.collection("Maison").getFullList({ filter : "prix<"+leprix}) ;
  records = records.map((a) => {
    a.img = pb.files.getURL(a, a.image);
    return a;
  });
  return records ;
  } catch(error){
  console.log("Une erreur est survenue en lisant la liste des maisons",error);
  return [];
  }
}