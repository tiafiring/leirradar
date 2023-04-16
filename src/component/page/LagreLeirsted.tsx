import { useForm, SubmitHandler } from "react-hook-form";

type LeirstedInputs = {
    navn: string,
    beskrivelse: string,
    koordinater: string,
    egnetForTelt: boolean,
    egnetForHengekoye: boolean
};

export default function LagreLeirsted() {
    const { register, handleSubmit, formState: { errors } } = useForm<LeirstedInputs>();
    const onSubmit: SubmitHandler<LeirstedInputs> = data => console.log(data);

    return (
        <div>
            <h4 className="mt-1 text-lg font-semibold">Lagre leirsted</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="px-2 flex flex-col mt-4">
                    Navn
                    <input className="mt-4 text-slate-500 border w-15" {...register("navn", { required: true })} />
                </label>
                <label className="px-2 flex flex-col mt-4">
                    Beskrivelse
                    <input className="mt-4 text-slate-500 border w-15" {...register("beskrivelse", { required: true })} />
                </label>
                <label className="px-2 flex flex-col mt-4">
                    Koordinater
                    <input className="mt-4 text-slate-500 border w-15" {...register("koordinater", { required: true })} />
                </label>
                <label className="px-2 flex flex-col mt-4">
                    Egnet for telt
                    <input className="mt-4 text-slate-500 border w-15" {...register("egnetForTelt", { required: true })} />
                </label>
                <label className="px-2 flex flex-col mt-4">
                    Egnet for hengekøye
                    <input className="mt-4 text-slate-500 border w-15" {...register("egnetForHengekoye", { required: true })} />
                </label>
                {errors.navn && <span>Må ha et navn</span>}
                <input className="mt-5 h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit" />
            </form>
        </div>
    );
}