import Bar from './Bar';
import Card from './Card';
import { Close } from './Icons';

export default function Modal(props: { onClose(): void, children: any }) {
    return (
        <div className="fixed inset-0 backdrop-blur bg-black/25 z-20">
            <main className="flex justify-end p-4">
                <button onClick={props.onClose}>
                    <Close className="text-red-600 w-8" />
                </button>
            </main>
            <Card className="rounded-b-none p-4 h-full mx-auto max-w-screen-md">
                <Bar />
                <div className="h-full mt-4 overflow-y-auto pb-20">
                    {props.children}
                </div>
            </Card>
        </div>
    )
}