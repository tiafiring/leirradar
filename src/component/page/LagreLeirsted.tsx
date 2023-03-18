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
            <h4>Lagre leirsted</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Navn
                    <input {...register("navn", { required: true })} />
                </label>
                <label>
                    Beskrivelse
                    <input {...register("beskrivelse", { required: true })} />
                </label>
                <label>
                    Koordinater
                    <input {...register("koordinater", { required: true })} />
                </label>
                <label>
                    Egnet for telt
                    <input {...register("egnetForTelt", { required: true })} />
                </label>
                <label>
                    Egnet for hengekøye
                    <input {...register("egnetForHengekoye", { required: true })} />
                </label>
                {errors.navn && <span>Må ha et navn</span>}
                <input type="submit" />
            </form>
        </div>
    );
}