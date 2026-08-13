"use client";

import { usePathname } from "next/navigation";
import {
    Home,
    GraduationCap,
    ClipboardCheck,
    Search,
    UserPlus,
    CalendarCheck,
    Settings,
    LogOut,
    ChevronDown,
} from "lucide-react";
import { useState } from "react";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarMenuSub,
    SidebarMenuSubItem,
    SidebarMenuSubButton,
} from "@/components/ui/sidebar";

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";

export function AppSidebar() {
    const pathname = usePathname();

    const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);

    const usuarioActual = {
        nombre: "Tatiana Capera",
        correo: "tatiana@sia.com",
        inicial: "T",
    };

    function handleConfirmarCierreSesion() {

        setLogoutDialogOpen(false);
    }

    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>

                    <div className="px-3 py-4">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white">
                                SIA
                            </div>

                            <div>
                                <p className="font-semibold text-blue-900">
                                    Sistema de Información
                                </p>

                                <p className="text-xs text-gray-500">
                                    de Asistencias
                                </p>
                            </div>
                        </div>
                    </div>

                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    asChild
                                    isActive={pathname === "/"}
                                >
                                    <a href="/">
                                        <Home />
                                        <span>Inicio</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>

                    <SidebarGroupLabel className="mt-4">
                        Gestión
                    </SidebarGroupLabel>

                    <SidebarGroupContent>
                        <SidebarMenu>

                            <Collapsible
                                defaultOpen={
                                    pathname.startsWith("/aprendices")
                                }
                            >
                                <SidebarMenuItem>

                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton>
                                            <GraduationCap />
                                            <span>Aprendices</span>
                                            <ChevronDown className="ml-auto" />
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>

                                    <CollapsibleContent>
                                        <SidebarMenuSub>

                                            <SidebarMenuSubItem>
                                                <SidebarMenuSubButton asChild>
                                                    <a href="/dashboard/aprendices/creacion">
                                                        <UserPlus />
                                                        <span>Registrar aprendiz</span>
                                                    </a>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>

                                            <SidebarMenuSubItem>
                                                <SidebarMenuSubButton asChild>
                                                    <a href="/dashboard/aprendices">
                                                        <Search />
                                                        <span>Consultar aprendices</span>
                                                    </a>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>

                                        </SidebarMenuSub>
                                    </CollapsibleContent>

                                </SidebarMenuItem>
                            </Collapsible>
                            <Collapsible
                                defaultOpen={
                                    pathname.startsWith("/asistencias")
                                }
                            >
                                <SidebarMenuItem>

                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton>
                                            <ClipboardCheck />
                                            <span>Asistencias</span>
                                            <ChevronDown className="ml-auto" />
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>

                                    <CollapsibleContent>
                                        <SidebarMenuSub>

                                            <SidebarMenuSubItem>
                                                <SidebarMenuSubButton asChild>
                                                    <a href="/dashboard/asistencias/creacion">
                                                        <CalendarCheck />
                                                        <span>Registrar asistencia</span>
                                                    </a>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>

                                            <SidebarMenuSubItem>
                                                <SidebarMenuSubButton asChild>
                                                    <a href="/dashboard/asistencias">
                                                        <Search />
                                                        <span>Consultar asistencias</span>
                                                    </a>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>

                                        </SidebarMenuSub>
                                    </CollapsibleContent>

                                </SidebarMenuItem>
                            </Collapsible>

                        </SidebarMenu>
                    </SidebarGroupContent>

                </SidebarGroup>
            </SidebarContent>

            {/* PARTE INFERIOR */}
            <SidebarFooter className="border-t px-3 py-3">

                <div className="flex items-center gap-3">

                    {/* Avatar */}
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                        {usuarioActual.inicial}
                    </div>

                    {/* Información usuario */}
                    <div className="min-w-0 flex-1">

                        <p className="truncate text-sm font-semibold text-blue-900">
                            {usuarioActual.nombre}
                        </p>

                        <p className="truncate text-xs text-gray-500">
                            {usuarioActual.correo}
                        </p>

                    </div>

                    {/* Cerrar sesión */}
                    <button
                        type="button"
                        onClick={() => setLogoutDialogOpen(true)}
                        className="shrink-0 rounded-lg p-2 text-gray-600 transition-colors hover:bg-red-50 hover:text-red-600"
                        title="Cerrar sesión"
                    >
                        <LogOut className="h-4 w-4" />
                    </button>

                </div>

            </SidebarFooter>

            {/* MODAL CERRAR SESIÓN */}
            <Dialog
                open={logoutDialogOpen}
                onOpenChange={setLogoutDialogOpen}
            >

                <DialogContent>

                    <DialogHeader>

                        <DialogTitle>
                            ¿Cerrar sesión?
                        </DialogTitle>

                        <DialogDescription>
                            Vas a salir de tu cuenta. ¿Estás seguro de que
                            quieres cerrar sesión?
                        </DialogDescription>

                    </DialogHeader>

                    <DialogFooter>

                        <button
                            type="button"
                            onClick={() => setLogoutDialogOpen(false)}
                            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                            Cancelar
                        </button>

                        <button
                            type="button"
                            onClick={handleConfirmarCierreSesion}
                            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                        >
                            Sí, cerrar sesión
                        </button>

                    </DialogFooter>

                </DialogContent>

            </Dialog>

        </Sidebar>
    );
}