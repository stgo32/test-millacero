import React, { useState } from "react";
import axios from "axios";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Combobox } from "./select";
import { serviceOptions, buyeeTypeOptions } from "../utils/options-params";

const url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

const initialFormState = {
  fullname: "",
  email: "",
  phone: "",
  address: "",
  numOfApartments: "",
  typeOfService: "",
  buyeeType: "",
  comment: "",
};

export function ExploreOptionsForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSendInfo = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`${url}/send-info`, {
        ...formData,
        numOfApartments: Number(formData.numOfApartments),
      });
      alert("Información enviada correctamente");

      setFormData(initialFormState);
    } catch (error) {
      alert("Error al enviar información");
      console.error(error);
    }
  };

  const handleLoadInfo = async () => {
    try {
      const response = await axios.get(`${url}/load-info`);
      const data = response.data;

      setFormData({
        fullname: data.fullname || "",
        email: data.email || "",
        phone: data.phone || "",
        address: data.address || "",
        numOfApartments: data.numOfApartments?.toString() || "",
        typeOfService: data.typeOfService || "",
        buyeeType: data.buyeeType || "",
        comment: data.comment || "",
      });
    } catch (error) {
      alert("Error al cargar información");
      console.error(error);
    }
  };

  return (
    <form
      className={cn("flex flex-col gap-4", className)}
      onSubmit={handleSendInfo}
      {...props}
    >
      <Input
        placeholder="Nombre y apellido"
        required
        value={formData.fullname}
        onChange={(e) => handleChange("fullname", e.target.value)}
      />
      <Input
        type="email"
        placeholder="Email"
        required
        value={formData.email}
        onChange={(e) => handleChange("email", e.target.value)}
      />
      <Input
        type="tel"
        placeholder="+569"
        required
        value={formData.phone}
        onChange={(e) => handleChange("phone", e.target.value)}
      />
      <Label className="text-xs font-light">Dirección de la comunidad</Label>
      <Input
        placeholder="Nombre de calle, 123, Comuna"
        required
        value={formData.address}
        onChange={(e) => handleChange("address", e.target.value)}
      />
      <Input
        type="number"
        placeholder="Cantidad de departamentos"
        required
        value={formData.numOfApartments}
        onChange={(e) => handleChange("numOfApartments", e.target.value)}
      />
      <Combobox
        searchTitle="Servicio a cotizar"
        options={serviceOptions}
        value={formData.typeOfService}
        onChange={(val) => handleChange("typeOfService", val)}
      />
      <Combobox
        searchTitle="Escribo como"
        options={buyeeTypeOptions}
        value={formData.buyeeType}
        onChange={(val) => handleChange("buyeeType", val)}
      />
      <Input
        placeholder="Comentarios (opcional)"
        value={formData.comment}
        onChange={(e) => handleChange("comment", e.target.value)}
      />

      <Button type="submit" variant="default" className="w-full">
        Enviar información
      </Button>
      <Button
        type="button"
        variant="outline"
        className="w-full"
        onClick={handleLoadInfo}
      >
        Cargar información
      </Button>
    </form>
  );
}
