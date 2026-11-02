export type AccessLevel = 'Public' | 'Members' | 'Leads' | 'Confidential'
export type Confidence = 'Verified' | 'Inferred' | 'Conflicting' | 'Missing'
export type ReviewStatus = 'Pending' | 'Approved' | 'Edited' | 'Rejected' | 'Redacted'
export type ClaimType = 'Decision' | 'Responsibility' | 'Open question' | 'Risk' | 'Dependency' | 'Blocker' | 'Recurring problem' | 'Next action' | 'Missing'
export type Persona = 'reviewer' | 'departing' | 'developer' | 'coordinator'
export type SourceType = 'README' | 'Meeting' | 'Slack' | 'Task board' | 'GitHub' | 'Email' | 'Budget' | 'Access notes'
export interface Chunk { id: string; text: string; sourceId: string; index: number }
export interface Source { id: string; name: string; type: SourceType; date: string; author: string; access: AccessLevel; text: string; chunks: Chunk[]; status: 'Connected' | 'Needs analysis' }
export interface Claim { id: string; text: string; type: ClaimType; owner: string | null; sourceId: string; chunkId: string; quote: string; confidence: Confidence; access: AccessLevel; status: ReviewStatus; lastEdited: string; linkedClaimIds?: string[]; shareWith?: Persona[]; entity?: string; dueDate?: string; reviewerEvidence?: string }
export interface Version { id: string; label: string; createdAt: string; by: string; summary: string; claimIds: string[] }
export interface Acknowledgement { persona: Persona; name: string; at: string; version: string }
export interface AppState { sources: Source[]; claims: Claim[]; versions: Version[]; acknowledgements: Acknowledgement[]; theme: 'light' | 'dark'; tourSeen: boolean }
export const PERSONAS: Record<Persona, {name:string; role:string; access:AccessLevel[]}> = { reviewer:{name:'Yash Patil',role:'Project Reviewer',access:['Public','Members','Leads','Confidential']}, departing:{name:'Aarav Mehta',role:'Departing member',access:['Public','Members','Leads']}, developer:{name:'Meera Nair',role:'Incoming Developer',access:['Public','Members']}, coordinator:{name:'Riya Shah',role:'Incoming Coordinator',access:['Public','Members']} }
