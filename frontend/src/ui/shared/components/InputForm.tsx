
interface Props {
    value: any
}

const x: Props = {
    value: ''
}

export default function InputForm({ ...rest }) {
    return (
        <div className="w-full px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            { rest.name}
          </label>
          <input {...rest} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
        </div>
    )
}