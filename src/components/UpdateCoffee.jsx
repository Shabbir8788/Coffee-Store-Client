import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updatedCoffee);

    fetch(`https://coffee-store-server-delta-five.vercel.app/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-24 space-y-6">
      <h2 className="text-3xl font-extrabold">Update Coffee : {name}</h2>
      <form onSubmit={handleUpdateCoffee}>
        {/*form name & quantity row*/}
        <div className="md:flex mb-4">
          <div className="md:w-1/2">
            <div className="mb-2">
              <span className="block text-left">Coffee Name</span>
            </div>
            <div>
              <input
                className="input input-bordered w-full"
                name="name"
                defaultValue={name}
                placeholder="Coffee Name"
              />
            </div>
          </div>

          <div className="md:w-1/2 md:ml-4">
            <div className="mb-2">
              <span className="block text-left">Available Quantity</span>
            </div>
            <div>
              <input
                className="input input-bordered w-full"
                name="quantity"
                defaultValue={quantity}
                placeholder="Available Quantity"
              />
            </div>
          </div>
        </div>

        {/*form supplier & taste row*/}
        <div className="md:flex mb-4">
          <div className="md:w-1/2">
            <div className="mb-2">
              <span className="block text-left">Supplier Name</span>
            </div>
            <div>
              <input
                className="input input-bordered w-full"
                name="supplier"
                defaultValue={supplier}
                placeholder="Supplier Name"
              />
            </div>
          </div>

          <div className="md:w-1/2 md:ml-4">
            <div className="mb-2">
              <span className="block text-left">Taste</span>
            </div>
            <div>
              <input
                className="input input-bordered w-full"
                name="taste"
                defaultValue={taste}
                placeholder="Taste"
              />
            </div>
          </div>
        </div>

        {/*form category & details row*/}
        <div className="md:flex mb-4">
          <div className="md:w-1/2">
            <div className="mb-2">
              <span className="block text-left">Category</span>
            </div>
            <div>
              <input
                className="input input-bordered w-full"
                name="category"
                defaultValue={category}
                placeholder="Category"
              />
            </div>
          </div>

          <div className="md:w-1/2 md:ml-4">
            <div className="mb-2">
              <span className="block text-left">Details</span>
            </div>
            <div>
              <input
                className="input input-bordered w-full"
                name="details"
                defaultValue={details}
                placeholder="Details"
              />
            </div>
          </div>
        </div>

        {/*form photo url row*/}
        <div className="mb-4">
          <div className="md:w-full">
            <div className="mb-2">
              <span className="block text-left">Photo URL</span>
            </div>
            <div>
              <input
                className="input input-bordered w-full"
                name="photo"
                defaultValue={photo}
                placeholder="Photo URL"
              />
            </div>
          </div>
        </div>

        <input
          type="submit"
          value="UPDATE COFFEE"
          className="btn btn-block bg-slate-800 text-yellow-500 font-bold"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
