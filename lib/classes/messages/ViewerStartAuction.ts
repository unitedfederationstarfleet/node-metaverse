// This file has been automatically generated by writeMessageClasses.js

import {UUID} from '../UUID';
import {MessageFlags} from '../../enums/MessageFlags';
import {MessageBase} from '../MessageBase';
import {Message} from '../../enums/Message';

export class ViewerStartAuctionMessage implements MessageBase
{
    name = 'ViewerStartAuction';
    messageFlags = MessageFlags.FrequencyLow;
    id = Message.ViewerStartAuction;

    AgentData: {
        AgentID: UUID;
        SessionID: UUID;
    };
    ParcelData: {
        LocalID: number;
        SnapshotID: UUID;
    };

    getSize(): number
    {
        return 52;
    }

    writeToBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        this.AgentData['AgentID'].writeToBuffer(buf, pos);
        pos += 16;
        this.AgentData['SessionID'].writeToBuffer(buf, pos);
        pos += 16;
        buf.writeInt32LE(this.ParcelData['LocalID'], pos);
        pos += 4;
        this.ParcelData['SnapshotID'].writeToBuffer(buf, pos);
        pos += 16;
        return pos - startPos;
    }

    readFromBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        let varLength = 0;
        const newObjAgentData: {
            AgentID: UUID,
            SessionID: UUID
        } = {
            AgentID: UUID.zero(),
            SessionID: UUID.zero()
        };
        newObjAgentData['AgentID'] = new UUID(buf, pos);
        pos += 16;
        newObjAgentData['SessionID'] = new UUID(buf, pos);
        pos += 16;
        this.AgentData = newObjAgentData;
        const newObjParcelData: {
            LocalID: number,
            SnapshotID: UUID
        } = {
            LocalID: 0,
            SnapshotID: UUID.zero()
        };
        newObjParcelData['LocalID'] = buf.readInt32LE(pos);
        pos += 4;
        newObjParcelData['SnapshotID'] = new UUID(buf, pos);
        pos += 16;
        this.ParcelData = newObjParcelData;
        return pos - startPos;
    }
}
