// This file has been automatically generated by writePacketClasses.js

import {UUID} from '../UUID';
import {MessageFlags} from '../../enums/MessageFlags';
import {Packet} from '../Packet';

export class GroupVoteHistoryItemReplyPacket implements Packet
{
    name = 'GroupVoteHistoryItemReply';
    flags = MessageFlags.Trusted | MessageFlags.Zerocoded | MessageFlags.FrequencyLow;
    id = 4294902122;

    AgentData: {
        AgentID: UUID;
        GroupID: UUID;
    };
    TransactionData: {
        TransactionID: UUID;
        TotalNumItems: number;
    };
    HistoryItemData: {
        VoteID: UUID;
        TerseDateID: string;
        StartDateTime: string;
        EndDateTime: string;
        VoteInitiator: UUID;
        VoteType: string;
        VoteResult: string;
        Majority: number;
        Quorum: number;
        ProposalText: string;
    };
    VoteItem: {
        CandidateID: UUID;
        VoteCast: string;
        NumVotes: number;
    }[];

    getSize(): number
    {
        return (this.HistoryItemData['TerseDateID'].length + 1 + this.HistoryItemData['StartDateTime'].length + 1 + this.HistoryItemData['EndDateTime'].length + 1 + this.HistoryItemData['VoteType'].length + 1 + this.HistoryItemData['VoteResult'].length + 1 + this.HistoryItemData['ProposalText'].length + 2) + ((this.calculateVarVarSize(this.VoteItem, 'VoteCast', 1) + 20) * this.VoteItem.length) + 93;
    }

    calculateVarVarSize(block: object[], paramName: string, extraPerVar: number): number
    {
        let size = 0;
        block.forEach((bl: any) =>
        {
            size += bl[paramName].length + extraPerVar;
        });
        return size;
    }

}