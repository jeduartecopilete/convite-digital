import { eventos } from "@/core";
import Image from "next/image";
import Link from "next/link";
import QRCode from "react-qr-code";

export default function PaginaEventos() {
    return (
        <div className="grid grid-cols-3 gap-5">
            {eventos.map((evento) => (
                <div key={evento.id}
                    className="flex flex-col bg-zinc-900
                    rounded-lg w-full overflow-hidden
                ">
                    <div className="relative w-full h-44">
                        <Image src={evento.imagem} layout="fill" className="object-cover" alt={evento.nome} />
                    </div>
                    <div className="flex-1 flex flex-col p-7 items-center  text-center gap-5">
                        <span>{evento.nome}</span>
                        <p className="flex-1 text-sm text-zinc-400">{evento.descricao}</p>
                        <QRCode value={JSON.stringify({id: evento.id, senha: evento.senha})}  className="w-44 h-44"/>
                        <div className="flex gap-5">
                            <Link href={`/evento/admin/${evento.id}/${evento.senha}`} className="flex-1 botao vermelho">Admin</Link>
                            <Link href={`/convite/${evento.alias}`} className="flex-1 botao verde">Convite</Link>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}