"use client";

import { useState } from "react";
import TitlePage from "../TitlePage";
import BlogCard from "@/components/ui/BlogCard";
import IMeet from "@/types/meet";


const MeetContent = ({ meets }: { meets: IMeet[] }) => {
    const [selected, setSelected] = useState(1);
    const newMeets = meets.filter(meet => meet.dateStart > new Date());
    const oldMeets = meets.filter(meet => meet.dateStart < new Date());

    return (
        <>
            <TitlePage
                    title1="Historique Rendez-vous"
                    title2="Nouveaux Rendez-vous"
                    selected={selected}
                    onChange={setSelected}
                />
            <div className="py-20 bg-pink-50 min-h-[100vh] flex flex-col gap-10 items-center">
                

                {selected === 1 && (
                    <div className="text-purple-800 font-semibold flex flex-col gap-6 justify-center items-center">
                        {oldMeets.map((meet, index) => {
                            return (
                                <div key={index} className={`${meet.service === "soin-energetique" ? "bg-gray-200" : meet.service === "eft" ? "bg-blue-200" : "bg-green-200"} min-w-[25rem] p-5 rounded-lg shadow-xl`}>
                                    <h2><span className="font-extrabold">{meet.service.toUpperCase()}</span> avec {meet.option}</h2>
                                    <h3>Rendez-vous avec {meet.name}</h3>
                                    <h3><span className="font-extrabold">{meet.dateStart && `le ${new Date(meet.dateStart).toLocaleDateString('fr-FR')}`}</span> {`à ${new Date(meet.dateStart).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}`}</h3>
                                    <h3>à {meet.address}</h3>
                                </div>
                            )
                        })}
                    </div>
                )}

                {selected === 2 && (
                    <div className="text-purple-800 font-semibold flex flex-col gap-6 justify-center items-center">
                        {newMeets.map((meet, index) => {
                            return (
                                <div key={index} className={`${meet.service === "soin-energetique" ? "bg-gray-200" : meet.service === "eft" ? "bg-blue-200" : "bg-green-200"} min-w-[25rem] p-5 rounded-lg shadow-xl`}>
                                    <h2><span className="font-extrabold">{meet.service.toUpperCase()}</span> avec {meet.option}</h2>
                                    <h3>Rendez-vous avec {meet.name}</h3>
                                    <h3><span className="font-extrabold">{meet.dateStart && `le ${new Date(meet.dateStart).toLocaleDateString('fr-FR')}`}</span> {`à ${new Date(meet.dateStart).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}`}</h3>
                                    <h3>à {meet.address}</h3>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </>
    );
};

export default MeetContent;