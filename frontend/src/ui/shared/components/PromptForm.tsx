import { useState } from "react";
import { Prompt } from "../../../core/model/Prompt";

interface Props {
  onSubmit: (data: Prompt) => void;
  prompt: Prompt;
}

export interface FormValues {
  id: string;
  name: string;
  template: string;
  description: string;
}

export default function PromptForm(props: Props) {

    const { onSubmit, prompt } = props

  const [formValues, setFormValues] = useState<FormValues>({ ...prompt });

  const onNameChange = (event: any) => {
    setFormValues({
        ...formValues,
        name: event.target.value
    })
  }

  const onDescriptionChange = (event: any) => {
    setFormValues({
        ...formValues,
        description: event.target.value
    })
  }

  const onTemplateChange = (event: any) => {
    setFormValues({
        ...formValues,
        template: event.target.value
    })
  }

  const onSavePrompt = () => {
    onSubmit({ ...formValues })
  };

  return (
    <form className="w-full max-w-lg mx-auto">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            Nombre
          </label>
          <input onChange={onNameChange} value={formValues.name} type="text" placeholder="Nombre" id="name"  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Descripción
          </label>
          <textarea onChange={onDescriptionChange} value={formValues.description} placeholder="Descripción" id="description" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Prompt Template
          </label>
          <textarea onChange={onTemplateChange} value={formValues.template} placeholder="Prompt template" id="prompt-template" className="appearance-none block w-full h-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button onClick={onSavePrompt} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Guardar
        </button>
      </div>
    </form>
  );
}

