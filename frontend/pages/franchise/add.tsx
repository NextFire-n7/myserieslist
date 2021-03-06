import type { NextPage } from "next";
import { useCallback, useState } from "react";


const FranchiseAdd: NextPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const resp = await fetch("/api/franchises", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nom: e.target.elements.nom.value,
        coverUrl : e.target.elements.coverUrl.value,
      }),
    });
    const data = await resp.json();
    console.log(data);
    setSubmitted(true);
  }, []);

  return (
    <div className="space-y-5">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-1">
        <label className="my-auto">Name</label>
        <input type="text" name="nom" className="flex-1 text-black" />
        <label className="my-auto">Logo de la Franchise</label>
        <input type="text" name="coverUrl" className="flex-1 text-black" />
        
        
        <input type="submit" className="flex-1 border-2 cursor-pointer" />
      </form>

      {submitted && (
        <div>
          <h1>Sucessfully submitted</h1>
        </div>
      )}
    </div>
  );
};

export default FranchiseAdd;
