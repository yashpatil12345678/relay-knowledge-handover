import {Claim, Persona, Source, PERSONAS} from '@/types'
export function getVisibleClaims(claims:Claim[], persona:Persona){const p=PERSONAS[persona];return claims.filter(c=>p.access.includes(c.access)&& (persona!=='coordinator'||['Responsibility','Next action','Risk','Dependency','Blocker','Recurring problem','Open question','Missing'].includes(c.type)) && (persona!=='developer'||c.access!=='Leads'||c.shareWith?.includes(persona)))}
export function getVisibleSources(sources:Source[], persona:Persona){const p=PERSONAS[persona];return sources.filter(s=>p.access.includes(s.access))}
