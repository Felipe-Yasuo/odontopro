import {
    DialogContent,
    DialogHeader,
    DialogDescription,
    DialogTitle,
} from "@/components/ui/dialog";
import { AppointmentWithService } from "./appointments-list";

interface DialogAppointmentProps {
    appointment: AppointmentWithService | null;
}

export function DialogAppointment({ appointment }: DialogAppointmentProps) {

    console.log("AGENDAMENTO CLICADO: ", appointment);

    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    Detalhes do agendamento
                </DialogTitle>
                <DialogDescription>
                    Veja todos os detalhes do agendamento
                </DialogDescription>
            </DialogHeader>

            <div className="py-4">

                {appointment && (
                    <article>
                        <p><span className="font-semibold">Nome:</span> {appointment.name}</p>
                        <p><span className="font-semibold">Telefone:</span> {appointment.phone}</p>
                    </article>
                )}


            </div>

        </DialogContent>
    )
}